import { computed } from "vue"
import { useRequirementStore } from "../stores/requirementStore"

export function useRequirementOperations() {
  const store = useRequirementStore()

  const requirementsByStatus = computed(() => {
    return {
      Draft: store.getRequirementsByStatus("Draft"),
      Review: store.getRequirementsByStatus("Review"),
      Approved: store.getRequirementsByStatus("Approved"),
      Implemented: store.getRequirementsByStatus("Implemented"),
    }
  })

  const requirementStatistics = computed(() => {
    return {
      total: store.requirements.length,
      draft: requirementsByStatus.value.Draft.length,
      review: requirementsByStatus.value.Review.length,
      approved: requirementsByStatus.value.Approved.length,
      implemented: requirementsByStatus.value.Implemented.length,
    }
  })

  return {
    requirementsByStatus,
    requirementStatistics,
  }
}

