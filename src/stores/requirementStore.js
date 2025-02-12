import { defineStore } from "pinia"
import { RequirementStatus, RequirementPriority } from "../models/Requirement"

export const useRequirementStore = defineStore("requirement", {
  state: () => ({
    requirements: [],
  }),

  getters: {
    filteredRequirements: (state) => (status) => {
      return status ? state.requirements.filter((req) => req.status === status) : state.requirements
    },
    sortedByPriority: (state) => {
      return [...state.requirements].sort((a, b) => {
        const priorityOrder = [RequirementPriority.High, RequirementPriority.Medium, RequirementPriority.Low]
        return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      })
    },
    sortedByDate: (state) => {
      return [...state.requirements].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    },
    requirementStats: (state) => {
      return Object.values(RequirementStatus).reduce((acc, status) => {
        acc[status] = state.requirements.filter((req) => req.status === status).length
        return acc
      }, {})
    },
  },

  actions: {
    addRequirement(requirement) {
      this.requirements.push(requirement)
    },
    updateRequirement(updatedRequirement) {
      const index = this.requirements.findIndex((req) => req.id === updatedRequirement.id)
      if (index !== -1) {
        this.requirements[index] = updatedRequirement
      }
    },
    deleteRequirement(id) {
      this.requirements = this.requirements.filter((req) => req.id !== id)
    },
    updateRequirementStatus(id, newStatus) {
      const requirement = this.requirements.find((req) => req.id === id)
      if (requirement) {
        requirement.updateStatus(newStatus)
      }
    },
  },
})

