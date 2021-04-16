import { Comment } from "./comment.model";

export class Event {
    id: number;
    creationDate: string;
    createdBy: string;
    involvedEmployeeId: number;
    title: string;
    description: string;
    statusName: string;
    witnesses: string[];
    isSelected: boolean;
    constructor(id: number,
        creationDate: string,
        createdBy: string,
        involvedEmployeeId: number,
        title: string,
        description: string,
        statusName: string,
        witnesses: string[],
        isSelected: boolean,
    ) {
        this.id = id;
        this.creationDate = creationDate;
        this.createdBy = createdBy;
        this.involvedEmployeeId = involvedEmployeeId;
        this.title = title;
        this.description = description;
        this.statusName = statusName;
        this.witnesses = witnesses;
        this.isSelected = isSelected;
    }
}
