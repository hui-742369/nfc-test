'use strict';

class ResponseApdu {

    constructor(buffer) {
        this.buffer = buffer;
        this.data = buffer.toString('hex');
    }

    getDataOnly() {
      return this.data.substr(0, this.data.length-4);
    }
    
    getStatusCode() {
        return this.data.substr(-4);
    }

    isOk() {
        return this.getStatusCode() === '9000';
    }

    buffer() {
        return this.buffer;
    }

    hasMoreBytesAvailable() {
        return this.data.substr(-4, 2) === '61';
    }

    numberOfBytesAvailable() {
        let hexLength = this.data.substr(-2, 2);
        return parseInt(hexLength, 16);
    }

    isWrongLength() {
        return this.data.substr(-4, 2) === '6c';
    }

    correctLength() {
        let hexLength = this.data.substr(-2, 2);
        return parseInt(hexLength, 16);
    }

    toString() {
        return this.data.toString('hex');
    }
}

export default ResponseApdu;