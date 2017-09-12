/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetCardTokenResponse
 */
class GetCardTokenResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.lastFourDigits = this.constructor.getValue(obj.lastFourDigits || obj.last_four_digits);
        this.holderName = this.constructor.getValue(obj.holderName || obj.holder_name);
        this.holderDocument = this.constructor.getValue(obj.holderDocument || obj.holder_document);
        this.expMonth = this.constructor.getValue(obj.expMonth || obj.exp_month);
        this.expYear = this.constructor.getValue(obj.expYear || obj.exp_year);
        this.brand = this.constructor.getValue(obj.brand);
        this.type = this.constructor.getValue(obj.type);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'lastFourDigits', realName: 'last_four_digits' },
            { name: 'holderName', realName: 'holder_name' },
            { name: 'holderDocument', realName: 'holder_document' },
            { name: 'expMonth', realName: 'exp_month' },
            { name: 'expYear', realName: 'exp_year' },
            { name: 'brand', realName: 'brand' },
            { name: 'type', realName: 'type' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = GetCardTokenResponse;