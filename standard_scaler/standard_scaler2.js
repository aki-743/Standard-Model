var fs = require("fs");
var Number2D = require("../number2d/number2d");

var n2d = new Number2D();

function StandardScaler() {
    var self = this;
    var modelAverage = null;
    var modelVariance = null;
    var modelDeviation = null;

    self.Fit = function(axis) {
        let file = fs.readFileSync("./seeds_dataset.txt", {encoding: 'utf-8'});
        var lines = file.toString().split("\n");
        var X = new Array();
        for(var i = 0; i < 200; i++) {
            X.push(lines[i].split("\t"));
        }
        modelAverage = n2d.Average(X, axis);
        modelVariance = n2d.Variance(X, axis);
        modelDeviation = n2d.Deviation(X, axis);
        return;
    }

    self.GetStandardModel = function() {
        let text = fs.readFileSync("./seeds_dataset.txt", {encoding: 'utf-8'});
        var lines = text.toString().split("\n");
        var res = new Array();
        for(var i = 200; i < lines.length; i++) {
            res.push(lines[i].split("\t"));
        }
        return res;
    }

    self.Transform = function() {
        var me = this;
        var data = me.GetStandardModel();
        var lineLength = data.length;
        var rowLength = data[0].length;
        var text = "";
        for(var i = 0; i < lineLength; i++) {
            for(var j = 0; j < rowLength; j++) {
                var standardValue = (Number(data[i][j]) - Number(modelAverage[j])) / Number(modelDeviation[j]);
                text += String(standardValue) + "\t";
            }
            text += "\n";
        }
        return fs.writeFileSync("standard2.tsv", text);
    }
}


// 標準化
var stn = new StandardScaler();
// サンプルデータの平均値、分散、標準偏差を計算
stn.Fit(0);
// 残りのデータを標準化
stn.Transform();