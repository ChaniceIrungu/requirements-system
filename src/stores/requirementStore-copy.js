import { defineStore } from "pinia"
import { Requirement } from "../models/Requirement"

export const useRequirementStore = defineStore("requirements", {
  state: () => ({
    requirements: [],
  }),
  getters: {
    getRequirementsByStatus: (state) => (status) => {
      return state.requirements.filter((req) => req.status === status)
    },
    getRequirementsByPriority: (state) => (priority) => {
      return state.requirements.filter((req) => req.priority === priority)
    },
  },
  actions: {
    createRequirement(requirementData) {
      const newRequirement = new Requirement(requirementData)
      this.requirements.push(newRequirement)
    },
    updateRequirement(updatedRequirement) {
      const index = this.requirements.findIndex((req) => req.id === updatedRequirement.id)
      if (index !== -1) {
        this.requirements[index] = new Requirement(updatedRequirement)
      }
    },
    deleteRequirement(id) {
      this.requirements = this.requirements.filter((req) => req.id !== id)
    },
  },
})

