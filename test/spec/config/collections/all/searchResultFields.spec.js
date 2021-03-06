(function () {
    'use strict';

    define(
        [
            'lodash',
            'chai',
            'config/collections/all/searchResultFields'
        ],
        function (_, chai, searchResultFields) {
            var expect = chai.expect;

            describe('The `all/searchResultFields` module', function () {
                it('Defines a static array', function () {
                    expect(searchResultFields).to.be.an('array');
                    expect(searchResultFields).to.have.length(13);
                });
                it('Defines the `MediaThumbnail` field', function () {
                    var mediaField = _.find(searchResultFields, { key: 'MediaThumbnail' });
                    expect(mediaField.labelText).to.equal('Image');
                    expect(mediaField.display).to.equal('cover-image');
                });
                it('Defines the `MediaSmall` field', function () {
                    var mediaField = _.find(searchResultFields, { key: 'MediaSmall' });
                    expect(mediaField.display).to.equal('cover-image');
                    expect(mediaField.tableColumn).to.equal(false);
                });
                it('Defines the `type` field', function () {
                    var titleField = _.find(searchResultFields, { key: 'type' });
                    expect(titleField.labelText).to.equal('Item Type');
                    expect(titleField.sort).to.equal(true);
                });
                it('Defines the `idno` field', function () {
                    var idnoField = _.find(searchResultFields, { key: 'idno' });
                    expect(idnoField.labelText).to.equal('Accession Number');
                    expect(idnoField.sort).to.equal(true);
                });
                it('Defines the `ItemName` field', function () {
                    var itemNameField = _.find(searchResultFields, { key: 'ItemName' });
                    expect(itemNameField.labelText).to.equal('Item Name');
                    expect(itemNameField.sort).to.equal(true);
                });
                it('Defines the `Title` field', function () {
                    var titleField = _.find(searchResultFields, { key: 'Title' });
                    expect(titleField.labelText).to.equal('Title');
                    expect(titleField.sort).to.equal(true);
                });
                it('Defines the `Author` field', function () {
                    var authorField = _.find(searchResultFields, { key: 'Author' });
                    expect(authorField.labelText).to.equal('Author');
                    expect(authorField.parse).to.equal(true);
                    expect(authorField.filter).to.equal(true);
                    expect(authorField.display).to.equal('list');
                    expect(_.isFunction(authorField.sort)).to.equal(true);
                });
                it('Defines the `Creator` field', function () {
                    var creatorField = _.find(searchResultFields, { key: 'Creator' });
                    expect(creatorField.labelText).to.equal('Creator');
                    expect(creatorField.parse).to.equal(true);
                    expect(creatorField.filter).to.equal('Value');
                    expect(creatorField.display).to.equal('typed-list');
                    expect(_.isFunction(creatorField.sort)).to.equal(true);
                });
                it('Defines the `MakersMarks` field', function () {
                    var makersMarksField = _.find(searchResultFields, { key: 'MakersMarks' });
                    expect(makersMarksField.labelText).to.equal('Makers Marks');
                });
                it('Defines the `Publisher` field', function () {
                    var publisherField = _.find(searchResultFields, { key: 'Publisher' });
                    expect(publisherField.labelText).to.equal('Publisher');
                    expect(publisherField.sort).to.equal(true);
                });
                it('Defines the `DateOfPublication` field', function () {
                    var dateOfPublicationField = _.find(searchResultFields, { key: 'DateOfPublication' });
                    expect(dateOfPublicationField.labelText).to.equal('Date of Publication');
                    expect(dateOfPublicationField.sort).to.equal(true);
                });
                it('Defines the `PlaceOfPublication` field', function () {
                    var placeOfPublicationField = _.find(searchResultFields, { key: 'PlaceOfPublication' });
                    expect(placeOfPublicationField.labelText).to.equal('Place of Publication');
                    expect(placeOfPublicationField.sort).to.equal(true);
                });
                it('Defines the `Location` field', function () {
                    var locationField = _.find(searchResultFields, { key: 'Location' });
                    expect(locationField.labelText).to.equal('Location');
                    expect(locationField.parse).to.equal(true);
                    expect(locationField.skip).to.equal(1);
                    expect(locationField.filter).to.equal(true);
                    expect(locationField.display).to.equal('hierarchy');
                    expect(_.isFunction(locationField.sort)).to.equal(true);
                });
            });
        }
    );
}());
