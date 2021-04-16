import moment from "moment";
import { Comment } from "./models/comment.model";
import { Employee } from "./models/employee.model";
import { Event } from "./models/event.model";

const comments: Comment[] = [
    {creationDate: '2016-04-22T06:23:00Z', author: 'Jean Valjean', content: "Océane est arrivée il y a seulement 3 mois"},
    {creationDate: '2007-03-20T07:34:00Z', author: 'Océane Quessy', content: "Je n'étais pas formé à ca"},
    {creationDate: '2012-08-27T08:54:00Z', author: 'Martin Duranseau', content: "Le marteau n'était pas dans la malette"},
    {creationDate: '2009-04-22T01:12:00Z', author: 'Martin Duranseau', content: "La procédure était très ancienne"},
    {creationDate: '2016-12-09T11:34:00Z', author: 'Adrien Lacharité', content: "L'alarme est défaillante"},
    {creationDate: '2018-01-21T06:59:00Z', author: 'Belisarda Mazuret', content: "Le sol est abimé"},
    {creationDate: '2012-09-27T08:54:00Z', author: 'Alex Duranseau', content: "Le marteau n'était pas présent"},
    {creationDate: '2009-05-22T01:12:00Z', author: 'Lola Langin', content: "Le sceau était brisé"},
    {creationDate: '2016-02-09T11:34:00Z', author: 'Zoé Lacharité', content: "L'alarme est trop forte"},
    {creationDate: '2018-03-21T06:59:00Z', author: 'Robert Mazuret', content: "La machine est trop lourde"}
]

const events:Event[] = [
    {
        "id": 47,
        "creationDate": "2008-03-30T05:13:23Z",
        "createdBy": "Kirstin",
        "involvedEmployeeId": 1868,
        "title": "Accident avec Adelle",
        "description": "",
        "statusName": "Open",
        "witnesses": [
            "Mureil",
            "Melina"
        ],
        isSelected: true
    },
    {
        "id": 81,
        "creationDate": "1983-05-30T11:35:46Z",
        "createdBy": "Louella",
        "involvedEmployeeId": 8139,
        "title": "Accident avec Amara",
        "description": "",
        "statusName": "Closed",
        "witnesses": [
            "Tina",
            "Luci"
        ],
        isSelected: false
    },
    {
        "id": 38,
        "creationDate": "2017-11-15T08:08:14Z",
        "createdBy": "Nannie",
        "involvedEmployeeId": 2532,
        "title": "Accident avec Helena",
        "description": "",
        "statusName":"InProgress",
        "witnesses": [
            "Jeanna",
            "Jerry"
        ],
        isSelected: false
    },
    {
        "id": 384,
        "creationDate": "2019-11-16T08:08:14Z",
        "createdBy": "Lola",
        "involvedEmployeeId": 2762,
        "title": "Accident avec Harry",
        "description": "Je me suis cassé le bras",
        "statusName": "InProgress",
        "witnesses": [
            "Jeanna",
            "Jerry",
            "Robert"
        ],
        isSelected: false
    }
]

const employees:Employee[] = [
    {
        "id": 2762,
        "firstName": "Harry",
        "lastName": "Joitir",
    },
    {
        "id": 2532,
        "firstName": "Helena",
        "lastName": "Hewitt",
    },
    {
        "id": 8139,
        "firstName": "Amara",
        "lastName": "Ivens"
    },
    {
        "id": 1868,
        "firstName": "Adelle",
        "lastName": "Thornburg"
    },
    {
        "id": 839,
        "firstName": "Lola",
        "lastName": "Ivensa"
    },
    {
        "id": 186,
        "firstName": "Zoé",
        "lastName": "Lalima"
    }
]

/**
 * Retourne un événement
 * Return an event
 * @function
 * @param {Number} index - Id de l'événement / Id of the event
 */
export function getEvent(index: number) {
    if (typeof(index) !== "number") {
        throw "Invalid index";
    }

    const event = events.find(x => x.id === index);

    if (event) {
        return event;
    } else {
        throw "Event not found"
    }
}

/**
 * Retourne la liste des commentaires associées à un événement
 * Return the comments associated with an event
 * @function
 * @param {Number} index - Id de l'événement / Id of the event
 */
export function getEventComments(index: number): Comment[] {
    if (typeof(index) !== "number") {
        throw "Invalid index";
    }

    if (index === 47) {
        return comments.slice(0,2);
    } else if (index === 81) {
        return comments.slice(2,9);
    }  else {
        return []
    }
}

/**
 * Retourne tous les évènement
 * Return all events
 * @function
 */
 export function getAllEvents(): Event[] {
    return events;
}
/**
 * Retourne tous les employées
 * Return all employee
 * @function
 */
 export function getAllEmployee(): Employee[] {
    return employees;
}
/**
 * Transforme un IsoString date vers le format YYYY-MM-DD
 * Parse IsoString date to YYYY-MM-DD format
 * @function
 *  @param {String} isoString - La date en isoString / Date with isoString format
 */
export function getFormattedDateFromIsoString(isoString: string): string{
    const date: Date = new Date(isoString);
    return moment(date).format("YYYY-MM-DD");
}
/**
 * Transforme un IsoString date vers le format HH:MM avec l'unité h
 * Parse IsoString date to HH:MM format with hours unit
 * @function
 *  @param {String} isoString - La date en isoString / Date with isoString format
 *  @param {Boolean} addUnit - Doit inclure l'unite / Should include unit
 */
export function getFormattedTimeFromIsoString(isoString: string, addUnit: boolean): string{
    const date: Date = new Date(isoString);
    const formattedTime = moment(date).format("HH:MM");
    return addUnit ? formattedTime.replace(":", "h:") : formattedTime;
}
/**
 * Transforme un IsoString date vers le format DD MMMM YYYY
 * Parse IsoString date to format: DD Month name YYYY
 * @function
 *  @param {String} isoString - La date en isoString / Date with isoString format
 */
 export function getDatewithMonthName(isoString: string): string{
    const date: Date = new Date(isoString);
    return moment(date).format("DD MMMM YYYY");
}