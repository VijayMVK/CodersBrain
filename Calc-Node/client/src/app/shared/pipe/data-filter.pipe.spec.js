"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_filter_pipe_1 = require("../../../app/shared/pipe/data-filter.pipe");
describe('Empoyee Data-filter Pipe Tests', function () {
    var pipe;
    beforeEach(function () {
        pipe = new data_filter_pipe_1.DataFilterPipe();
    });
    it('Should return array with expected', function () {
        // Arrange
        var array = [{
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
        var result = pipe.transform(array, 'Oliver');
        // Assert
        expect(result).toEqual(JSON.parse('[{"name": "Oliver","email": "mauris@Craslorem.ca","regDate": "2015-11-19T19:11:33-08:00","designation": "TL","experience": 8    }]'));
    });
});
//# sourceMappingURL=data-filter.pipe.spec.js.map