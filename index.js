function convertEngNumToBangNum(amount) {
    var engToBangNum={'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
    String.prototype.getBangFromEng = function() {
        var trans = this;
        for (var x in engToBangNum) {
             trans = trans.replace(new RegExp(x, 'g'), engToBangNum[x]);
        }
        return trans;
    };
    var banglaConvertedNum=amount.getBangFromEng();
    return banglaConvertedNum;
}
module.exports = convertEngNumToBangNum;