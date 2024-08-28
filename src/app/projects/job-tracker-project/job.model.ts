export class Job {
    id: number;
    title: string;
    company: string;
    description: string;
    location: string;
    date: string;
    notes: string;
    url: string;

    constructor(id: number, title: string, company: string, desc: string, location: string, date: string, notes: string, url: string) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.description = desc;
        this.location = location;
        this.date = date;
        this.notes = notes;
        this.url = url;
    }
}