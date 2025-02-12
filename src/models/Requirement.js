export const RequirementStatus = {
    Draft: "Draft",
    Review: "Review",
    Approved: "Approved",
    Implemented: "Implemented",
  }
  
  export const RequirementPriority = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
  }
  


  export class Requirement {
    constructor(title, description, priority, stakeholder) {
      this.id = Date.now().toString()
      this.title = title
      this.description = description
      this.status = RequirementStatus.Draft
      this.priority = priority
      this.createdAt = new Date()
      this.stakeholder = stakeholder
    }
  
    updateStatus(newStatus) {
      this.status = newStatus
    }
  
    validate() {
      return this.title.length > 0 && this.description.length > 0
    }
  }
  
  