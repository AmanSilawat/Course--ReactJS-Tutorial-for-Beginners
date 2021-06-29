import React, { Component } from 'react';
import Person from './Person';

class NameList extends Component {
    constructor() {
        super();
        this.state = {
            persons: [
                { "id": 1, "first_name": "Barbabra", "last_name": "Jepperson", "email": "bjepperson0@yellowpages.com", "gender": "Male" },
                { "id": 2, "first_name": "Sissie", "last_name": "Szymon", "email": "sszymon1@kickstarter.com", "gender": "Genderqueer" },
                { "id": 3, "first_name": "Sybila", "last_name": "Mulleary", "email": "smulleary2@devhub.com", "gender": "Bigender" },
                { "id": 4, "first_name": "Casey", "last_name": "Darbon", "email": "cdarbon3@plala.or.jp", "gender": "Female" },
                { "id": 5, "first_name": "Tommy", "last_name": "Tingcomb", "email": "ttingcomb4@ning.com", "gender": "Non-binary" },
                { "id": 6, "first_name": "Avie", "last_name": "Cloake", "email": "acloake5@etsy.com", "gender": "Genderqueer" },
                { "id": 7, "first_name": "Artemas", "last_name": "Marjoribanks", "email": "amarjoribanks6@xinhuanet.com", "gender": "Polygender" },
                { "id": 8, "first_name": "Charline", "last_name": "Peskin", "email": "cpeskin7@wp.com", "gender": "Polygender" },
                { "id": 9, "first_name": "Layne", "last_name": "Sprules", "email": "lsprules8@merriam-webster.com", "gender": "Polygender" },
                { "id": 10, "first_name": "Abner", "last_name": "Danilin", "email": "adanilin9@msn.com", "gender": "Genderfluid" },
                { "id": 11, "first_name": "Ike", "last_name": "O'Fogarty", "email": "iofogartya@dailymail.co.uk", "gender": "Non-binary" },
                { "id": 12, "first_name": "Abbot", "last_name": "Rothermel", "email": "arothermelb@phpbb.com", "gender": "Female" },
                { "id": 13, "first_name": "Ulises", "last_name": "Cambden", "email": "ucambdenc@miibeian.gov.cn", "gender": "Female" },
                { "id": 14, "first_name": "Mei", "last_name": "Cathrae", "email": "mcathraed@macromedia.com", "gender": "Non-binary" },
                { "id": 15, "first_name": "Nappie", "last_name": "Chinnick", "email": "nchinnicke@nytimes.com", "gender": "Non-binary" },
                { "id": 16, "first_name": "Carrissa", "last_name": "Yurygyn", "email": "cyurygynf@opensource.org", "gender": "Genderfluid" },
                { "id": 17, "first_name": "Sylvia", "last_name": "Fritzer", "email": "sfritzerg@cdc.gov", "gender": "Polygender" },
                { "id": 18, "first_name": "Carlynn", "last_name": "Lingner", "email": "clingnerh@netlog.com", "gender": "Bigender" },
                { "id": 19, "first_name": "Mick", "last_name": "Eskriet", "email": "meskrieti@arstechnica.com", "gender": "Agender" },
                { "id": 20, "first_name": "Berri", "last_name": "Lawles", "email": "blawlesj@amazonaws.com", "gender": "Non-binary" },
                { "id": 21, "first_name": "Fred", "last_name": "Sheringham", "email": "fsheringhamk@unblog.fr", "gender": "Genderqueer" },
                { "id": 22, "first_name": "Meade", "last_name": "Jacklings", "email": "mjacklingsl@nymag.com", "gender": "Female" },
                { "id": 23, "first_name": "Bonnie", "last_name": "Butterly", "email": "bbutterlym@engadget.com", "gender": "Polygender" },
                { "id": 24, "first_name": "Genovera", "last_name": "Thorby", "email": "gthorbyn@guardian.co.uk", "gender": "Non-binary" },
                { "id": 25, "first_name": "Codi", "last_name": "Behn", "email": "cbehno@ox.ac.uk", "gender": "Agender" },
                { "id": 26, "first_name": "Rivy", "last_name": "Leil", "email": "rleilp@admin.ch", "gender": "Non-binary" },
                { "id": 27, "first_name": "Jordain", "last_name": "Naptin", "email": "jnaptinq@nyu.edu", "gender": "Genderqueer" },
                { "id": 28, "first_name": "Ginny", "last_name": "Matyja", "email": "gmatyjar@forbes.com", "gender": "Polygender" },
                { "id": 29, "first_name": "Montgomery", "last_name": "DeSousa", "email": "mdesousas@lulu.com", "gender": "Polygender" },
                { "id": 30, "first_name": "Barrett", "last_name": "Cudby", "email": "bcudbyt@guardian.co.uk", "gender": "Genderfluid" },
                { "id": 31, "first_name": "Cornelia", "last_name": "Radbourne", "email": "cradbourneu@europa.eu", "gender": "Agender" },
                { "id": 32, "first_name": "Stefan", "last_name": "Lyness", "email": "slynessv@digg.com", "gender": "Non-binary" },
                { "id": 33, "first_name": "Louis", "last_name": "Catterill", "email": "lcatterillw@lulu.com", "gender": "Bigender" },
                { "id": 34, "first_name": "Lizabeth", "last_name": "Pinkard", "email": "lpinkardx@hp.com", "gender": "Agender" },
                { "id": 35, "first_name": "Lelah", "last_name": "Gregon", "email": "lgregony@google.nl", "gender": "Bigender" },
                { "id": 36, "first_name": "Clarita", "last_name": "Logg", "email": "cloggz@paginegialle.it", "gender": "Agender" },
                { "id": 37, "first_name": "Pernell", "last_name": "Loader", "email": "ploader10@cmu.edu", "gender": "Female" },
                { "id": 38, "first_name": "Baudoin", "last_name": "Nicholson", "email": "bnicholson11@behance.net", "gender": "Genderfluid" },
                { "id": 39, "first_name": "Frederik", "last_name": "Done", "email": "fdone12@blogspot.com", "gender": "Genderfluid" },
                { "id": 40, "first_name": "Regen", "last_name": "Potbury", "email": "rpotbury13@joomla.org", "gender": "Genderqueer" },
                { "id": 41, "first_name": "Bay", "last_name": "Shackel", "email": "bshackel14@yahoo.co.jp", "gender": "Bigender" },
                { "id": 42, "first_name": "Tim", "last_name": "Flippini", "email": "tflippini15@hexun.com", "gender": "Polygender" },
                { "id": 43, "first_name": "Norry", "last_name": "Urion", "email": "nurion16@harvard.edu", "gender": "Male" },
                { "id": 44, "first_name": "Corty", "last_name": "Boorn", "email": "cboorn17@acquirethisname.com", "gender": "Agender" },
                { "id": 45, "first_name": "Pansy", "last_name": "Elmar", "email": "pelmar18@walmart.com", "gender": "Non-binary" },
                { "id": 46, "first_name": "Cicily", "last_name": "Audrey", "email": "caudrey19@angelfire.com", "gender": "Genderfluid" },
                { "id": 47, "first_name": "Bidget", "last_name": "Mobley", "email": "bmobley1a@nhs.uk", "gender": "Genderqueer" },
                { "id": 48, "first_name": "Elfrida", "last_name": "Balaam", "email": "ebalaam1b@woothemes.com", "gender": "Agender" },
                { "id": 49, "first_name": "Buck", "last_name": "Hovard", "email": "bhovard1c@is.gd", "gender": "Agender" },
                { "id": 50, "first_name": "Wilden", "last_name": "Thonger", "email": "wthonger1d@nsw.gov.au", "gender": "Female" }]
        }
        this.sort = this.sort.bind(this);
    }
    sort(event) {
        console.log(this)
        const sort_by = event.target.dataset.type;
        // const arr = [...this.state.persons];
        this.state.persons.sort((person_a, person_b) => {
            return person_a[sort_by] < person_b[sort_by] ? -1 : 1
        });
        this.setState(
            {
                persons: this.state.persons
            }
        )
    }

    render() {
        return (
            <>
                <button onClick={this.sort}>Sort</button>
                <table>
                    <thead>
                        <tr>
                            <th onClick={this.sort} data-type="id">id</th>
                            <th onClick={this.sort} data-type="first_name">name</th>
                            <th onClick={this.sort} data-type="email">email</th>
                            <th onClick={this.sort} data-type="gender">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map((person, index) => <Person key={index} person={person} />)}
                    </tbody>
                </table>
            </>
        );
    }
}

export default NameList;