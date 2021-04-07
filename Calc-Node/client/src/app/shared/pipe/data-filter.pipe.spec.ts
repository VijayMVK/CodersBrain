import { TestBed } from '@angular/core/testing';
import { DataFilterPipe } from "../../../app/shared/pipe/data-filter.pipe";

describe('Empoyee Data-filter Pipe Tests', () => {
    let pipe: DataFilterPipe;

    beforeEach(() => {
        pipe = new DataFilterPipe();
    });

    it('Should return array with expected', () => {

        // Arrange
        let array = [{
            "name": "Wing",
            "email": "tellus.eu.augue@arcu.com",
            "regDate": "2016-01-09T14:48:34-08:00",
            "designation": "Software engineer",
            "experience": 5
        },
        {
            "name": "Whitney",
            "email": "sed.dictum@Donec.org",
            "regDate": "2017-01-23T20:09:52-08:00",
            "designation": "BI",
            "experience": 15
        },
        {
            "name": "Oliver",
            "email": "mauris@Craslorem.ca",
            "regDate": "2015-11-19T19:11:33-08:00",
            "designation": "TL",
            "experience": 8
        },
        {
            "name": "Vladimir",
            "email": "mi.Aliquam@Phasellus.net",
            "regDate": "2015-11-02T07:59:34-08:00",
            "designation": "Software engineer",
            "experience": 3
        },
        {
            "name": "Maggy",
            "email": "ligula@acorciUt.edu",
            "regDate": "2017-02-25T15:42:17-08:00",
            "designation": "Software engineer",
            "experience": 5
        }];

         // Act
        let result = pipe.transform(array, 'Oliver');

        // Assert
        expect(result).toEqual(JSON.parse('[{"name": "Oliver","email": "mauris@Craslorem.ca","regDate": "2015-11-19T19:11:33-08:00","designation": "TL","experience": 8    }]'));
    });
});

