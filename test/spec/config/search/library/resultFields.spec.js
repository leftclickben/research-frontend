(function () {
    'use strict';

    define(
        [
            'chai',
            'config/search/library/resultFields'
        ],
        function (chai, resultFields) {
            var expect = chai.expect;

            describe('The `library/resultFields` module', function () {
                it('Defines a static array', function () {
                    expect(resultFields).to.be.an('array');
                    expect(resultFields).to.have.length(7);
                });
                it('Defines the `Title` field', function () {
                    expect(resultFields[0].key).to.equal('Title');
                    expect(resultFields[0].labelText).to.equal('Title');
                    expect(resultFields[0].displayValue).to.equal(undefined);
                });
                it('Defines the `Author` field', function () {
                    expect(resultFields[1].key).to.equal('Author');
                    expect(resultFields[1].labelText).to.equal('Author');
                    expect(resultFields[1].displayValue).to.be.a('function');
                });
                it('Defines the `Publisher` field', function () {
                    expect(resultFields[2].key).to.equal('Publisher');
                    expect(resultFields[2].labelText).to.equal('Publisher');
                    expect(resultFields[2].displayValue).to.equal(undefined);
                });
                it('Defines the `DateOfPublication` field', function () {
                    expect(resultFields[3].key).to.equal('DateOfPublication');
                    expect(resultFields[3].labelText).to.equal('Date of Publication');
                    expect(resultFields[3].displayValue).to.equal(undefined);
                });
                it('Defines the `PlaceOfPublication` field', function () {
                    expect(resultFields[4].key).to.equal('PlaceOfPublication');
                    expect(resultFields[4].labelText).to.equal('Place of Publication');
                    expect(resultFields[4].displayValue).to.equal(undefined);
                });
                it('Defines the `PublicationType` field', function () {
                    expect(resultFields[5].key).to.equal('PublicationType');
                    expect(resultFields[5].labelText).to.equal('Type');
                    expect(resultFields[5].displayValue).to.equal(undefined);
                });
                it('Defines the `Subjects` field', function () {
                    expect(resultFields[6].key).to.equal('Subjects');
                    expect(resultFields[6].labelText).to.equal('Subjects');
                    expect(resultFields[6].displayValue).to.be.a('function');
                });
            });
        }
    );
}());
