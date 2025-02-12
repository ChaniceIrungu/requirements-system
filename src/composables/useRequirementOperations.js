import { ref, computed } from "vue"
import { useRequirementStore } from "../stores/requirementStore"
import { Requirement, RequirementStatus, RequirementPriority } from "../models/Requirement"

export function useRequirementOperations() {
  const store = useRequirementStore()
  const filterStatus = ref(null)
  const sortBy = ref("priority")

  const filteredAndSortedRequirements = computed(() => {
    let requirements = store.filteredRequirements(filterStatus.value)
    if (sortBy.value === "priority") {
      requirements = store.sortedByPriority
    } else if (sortBy.value === "date") {
      requirements = store.sortedByDate
    }
    return requirements
  })

  const addRequirement = (title, description, priority, stakeholder) => {
    const newRequirement = new Requirement(title, description, priority, stakeholder)
    if (newRequirement.validate()) {
      store.addRequirement(newRequirement)
      return true
    }
    return false
  }

  const updateRequirementStatus = (id, newStatus) => {
    store.updateRequirementStatus(id, newStatus)
  }

  const deleteRequirement = (id) => {
    store.deleteRequirement(id)
  }

  return {
    filterStatus,
    sortBy,
    filteredAndSortedRequirements,
    addRequirement,
    updateRequirementStatus,
    deleteRequirement,
    RequirementStatus,
    RequirementPriority,
  }
}

