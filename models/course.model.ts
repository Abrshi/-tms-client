import { Temporal } from "@js-temporal/polyfill";
export interface Course {
readonly id: string;
title: string;
capacity: number;
startDate?: Temporal.PlainDate;
}



export type CourseStatus =
| { status: "DRAFT"; createdBy: string; createdAt: Temporal.Instant }
| { status: "PUBLISHED"; publishedAt: Temporal.Instant; syllabus: string }
| {
status: "ACTIVE";
enrolledCount: number;
startDate: Temporal.PlainDate;
}
| {
status: "ARCHIVED";
archivedAt: Temporal.Instant;
finalEnrollmentCount: number;
}
| { status: "CANCELLED"; reason: string; cancelledAt: Temporal.Instant };

export function describeCourse(status: CourseStatus): string {
// Your switch goes here. Handle all 5 states.
// Each case should return a descriptive string using the state-specific fields.
// Include the default/never check.
switch (status.status) {
case "DRAFT":
    return `Draft created by ${status.createdBy} on ${status.createdAt}`;
case "PUBLISHED":
    return `Published on ${status.publishedAt}. Syllabus: ${status.syllabus}`;
case "ACTIVE":
    return `Active with ${status.enrolledCount} students, starting on ${status.startDate}`;
case "ARCHIVED":
    return `Archived on ${status.archivedAt} with ${status.finalEnrollmentCount} students`;
case "CANCELLED":
    return `Cancelled on ${status.cancelledAt}. Reason: ${status.reason}`;
default: {
    const _check: never = status;
    throw new Error(`Unhandled course status: ${JSON.stringify(_check)}`);
}   
}
}
