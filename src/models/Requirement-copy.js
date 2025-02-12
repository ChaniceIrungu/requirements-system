export class Requirement {
  constructor({
    id = Date.now(),
    title,
    description,
    status = "Draft",
    priority = 2,
    createdAt = new Date(),
    stakeholder = "",
  }) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
    this.priority = priority
    this.createdAt = createdAt
    this.stakeholder = stakeholder
  }

  updateStatus(newStatus) {
    const validStatuses = ["Draft", "Review", "Approved", "Implemented"]
    if (validStatuses.includes(newStatus)) {
      this.status = newStatus
    } else {
      throw new Error("Invalid status")
    }
  }

  validate() {
    if (!this.title || this.title.length < 3) {
      throw new Error("Title must be at least 3 characters long")
    }
    if (!this.description) {
      throw new Error("Description is required")
    }
    if (![1, 2, 3].includes(this.priority)) {
      throw new Error("Priority must be 1, 2, or 3")
    }
  }
}

