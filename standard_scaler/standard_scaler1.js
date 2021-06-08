var fs = require("fs");
const Number1D = require("../number1d/number1d");

var n1d = new Number1D;

function StandardScaler() {
    var self = this;
    var modelAverage = 0;
    var modelVariance = 0;
    var modelDeviation = 0;

    self.Fit = function(X) {
        modelAverage = n1d.Average(X);
        modelVariance = n1d.Variance(X);
        modelDeviation = n1d.Deviation(X);
        return;
    }

    // self.getSample = function() {
    //     let text = fs.readFileSync("./seeds_dataset.txt", {encoding: 'utf-8'});
    //     var lines = text.toString().split("\n");
    //     var res = lines[0].split("\t");
    //     return res;
    // }

    self.OutPut = function(X, Z) {
        var text = "Xの標準化\n";
        for(var i = 0; i < X.length; i++) {
            text += X[i] + "\t";
        }
        text += "\nZの標準化\n";
        for(var i = 0; i < Z.length; i++) {
            text += Z[i] + "\t";
        }
        return fs.writeFileSync("standard.tsv", text);
    }

    self.Transform = function(a) {
        var length = a.length;
        var res = n1d.Create(length);
        for(var i = 0; i < length; i++) {
            res[i] = (a[i] - modelAverage) / modelDeviation;
        }
        return res;
    }
}


// 標準化
var stn = new StandardScaler();
var X = [4, 1, 7, 2, 3, 6, 8, 5]
// サンプルデータの平均値、分散、標準偏差を計算
stn.Fit(X);
// データの標準化
var scaled_X = stn.Transform(X);
console.log(scaled_X);

var Z = [3, 1, 5, 2, 3, 7, 8, 1];
var scaled_Z = stn.Transform(Z);
console.log(scaled_Z);

// 結果の出力
stn.OutPut(scaled_X, scaled_Z)