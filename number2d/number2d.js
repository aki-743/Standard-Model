function Number2D() {
    var self = this;

    self.Addition = function(a, b, axis) {
        var me = this;
        var lineLength = a.length;
        var rowLength = a[0].length;
        var res = new Array();
        if(axis === -1) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] + b;
                }
            }
        } else if(axis === 0) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] + b[0][j];
                }
            }
        } else {
            res = me.Create(rowLength, lineLength);
            for (var i = 0; i < rowLength; i++) {
                for(var j = 0; j < lineLength; j++) {
                    res[i][j] = a[j][i] + b[j][0];
                }
            }
        }
        return res;
    }

    self.Average = function(X, axis) {
        var me = this;
        var lineLength = X.length;
        var rowLength = X[0].length;
        var average = null;
        if(axis === -1) {
            var total = me.Total(X, -1);
            var n = lineLength * rowLength;
            average = total / n;
        } else if(axis === 0) {
            average = new Array(rowLength);
            var total = me.Total(X, 0);
            var n = lineLength;
            for(var i = 0; i < rowLength; i++) {
                average[i] = total[i] / n;
            }
        } else {
            average = new Array(lineLength);
            var total = me.Total(X, 1);
            var n = rowLength;
            for(var i = 0; i < lineLength; i++) {
                average[i] = total[i] / n;
            }
        }
        return average;
    }

    self.Create = function(n, m) {
        var res = new Array();
        for(var i = 0; i < n; i++) {
            var line = new Array(m);
            for(var j = 0; j < m; j++) {
                line[j] = null;
            }
            res.push(line);
        }
        return res;
    }

    self.Deviation = function(a, axis) {
        var me = this;
        var variance = me.Variance(a, axis)
        var res = null;
        if(axis === -1) {
            res = Math.sqrt(variance);
        } else {
            res = new Array(variance.length);
            for (let i = 0; i < variance.length; i++) {
                res[i] = Math.sqrt(variance[i]);
            }
        }
        return res; 
    }

    self.Division = function(a, b, axis) {
        var me = this;
        var lineLength = a.length;
        var rowLength = a[0].length;
        var res = new Array();
        if(axis === -1) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] / b;
                }
            }
        } else if(axis === 0) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] / b[0][j];
                }
            }
        } else {
            res = me.Create(rowLength, lineLength);
            for (var i = 0; i < rowLength; i++) {
                for(var j = 0; j < lineLength; j++) {
                    res[i][j] = a[j][i] / b[j][0];
                }
            }
        }
        return res;
    }

    self.Flatten = function(X) {
        var res = new Array();
        for(var i = 0; i < X.length; i++) {
            res = res.concat(X[i]);
        }
        return res;
    }

    self.Full = function(n, m, N) {
        var me = this;
        var res = me.Create(n, m);
        for(var i = 0; i < n; i++) {
            var line = new Array(m);
            for(var j = 0; j < m; j++) {
                line[j] = N;
            }
            res[i] = line;
        }
        return res;
    }

    self.Indexing = function(X, indexes, axis) {
        var me = this;
        var res = new Array();
        if(axis === 0) {
            for(var i = 0; i < indexes.length; i++) {
                var index = indexes[i];
                res.push(X[index]);
            }
        } else {
            var transposeX = me.Transpose(X);
            for(var i = 0; i < indexes.length; i++) {
                var index = indexes[i];
                res.push(transposeX[index]);
            }
        }
        return res;
    }

    self.Max = function(X, axis) {
        var lineLength = X.length;
        var rowLength = X[0].length;
        var max = -100000;
        var res = null;
        if(axis === -1) {
            for(var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    if(X[i][j] > max) {
                        max = X[i][j];
                    }
                }
            }
            res = max;
        } else if(axis === 0) {
            res = new Array(rowLength);
            for(var i = 0; i < rowLength; i++) {
                max = -100000;
                for(var j = 0; j < lineLength; j++) {
                    if(X[j][i] > max) {
                        max = X[j][i];
                    }
                }
                res[i] = max;
            }
        } else {
            res = new Array(lineLength);
            for(var i = 0; i < lineLength; i++) {
                max = -100000;
                for(var j = 0; j < rowLength; j++) {
                    if(X[i][j] > max) {
                        max = X[i][j];
                    }
                }
                res[i] = max;
            }
        }
        return res;
    }

    self.Min = function(X, axis) {
        var lineLength = X.length;
        var rowLength = X[0].length;
        var min = 100000;
        var res = null;
        if(axis === -1) {
            for(var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    if(X[i][j] < min) {
                        min = X[i][j];
                    }
                }
            }
            res = min;
        } else if(axis === 0) {
            res = new Array(rowLength)
            for(var i = 0; i < rowLength; i++) {
                min = 100000;
                for(var j = 0; j < lineLength; j++) {
                    if(X[j][i] < min) {
                        min = X[j][i];
                    }
                }
                res[i] = min;
            }
        } else {
            res = new Array(lineLength);
            for(var i = 0; i < lineLength; i++) {
                min = 100000;
                for(var j = 0; j < rowLength; j++) {
                    if(X[i][j] < min) {
                        min = X[i][j];
                    }
                }
                res[i] = min;
            }
        }
        return res;
    }

    self.Square = function(X) {
        var me = this;
        var lineLength = X.length;
        var rowLength = X[0].length;
        var res = me.Create(lineLength, rowLength);
        for(var i = 0; i < lineLength; i++) {
            for(var j = 0; j < rowLength; j++) {
                res[i][j] = X[i][j] * X[i][j];
            }
        }
        return res;
    }

    self.Multiplication = function(a, b, axis) {
        var me = this;
        var lineLength = a.length;
        var rowLength = a[0].length;
        var res = new Array();
        if(axis === -1) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] * b;
                }
            }
        } else if(axis === 0) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] * b[0][j];
                }
            }
        } else {
            res = me.Create(rowLength, lineLength);
            for (var i = 0; i < rowLength; i++) {
                for(var j = 0; j < lineLength; j++) {
                    res[i][j] = a[j][i] * b[j][0];
                }
            }
        }
        return res;
    } 
    
    self.Substract = function(a, b, axis) {
        var me = this;
        var lineLength = a.length;
        var rowLength = a[0].length;
        var res = new Array();
        if(axis === -1) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] - b;
                }
            }
        } else if(axis === 0) {
            res = me.Create(lineLength, rowLength);
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    res[i][j] = a[i][j] - b[0][j];
                }
            }
        } else {
            res = me.Create(rowLength, lineLength);
            for (var i = 0; i < rowLength; i++) {
                for(var j = 0; j < lineLength; j++) {
                    res[i][j] = a[j][i] - b[j][0];
                }
            }
        }
        return res;
    }

    self.Transpose = function(X) {
        var lineLength = X.length;
        var rowLength = X[0].length;
        var res = new Array(rowLength);
        for(var i = 0; i < rowLength; i++) {
            var line = new Array(lineLength);
            for(var j = 0; j < lineLength; j++) {
                const element = X[j];
                line[j] =element[i];
            }
            res[i] = line;
        }
        return res;
    }

    self.Total = function(X, axis) {
        var lineLength = X.length;
        var rowLength = X[0].length;
        var res = null;
        if(axis === -1) {
            var total = 0;
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    total += Number(X[i][j]);
                }
            }
            res = total
        } else if(axis === 0) {
            res = new Array(rowLength);
            for (var i = 0; i < rowLength; i++) {
                var sum = 0;
                for(var j = 0; j < lineLength; j++) {
                    sum += Number(X[j][i]);
                }
                res[i] = sum;
            }
        } else {
            res = new Array(lineLength);
            for (var i = 0; i < lineLength; i++) {
                var sum = 0;
                for(var j = 0; j < rowLength; j++) {
                    sum += Number(X[i][j]);
                }
                res[i] = sum
            }
        }
        return res;
    }

    self.Variance = function(a, axis) {
        var me = this;
        var lineLength = a.length;
        var rowLength = a[0].length;
        var average = null;
        var squareA = me.Square(a);
        var squareAverage = null;
        var variance = null;
        if(axis === -1) {
            average = me.Average(a, -1);
            squareAverage = me.Average(squareA, -1);
            variance = squareAverage - (average * average);
        } else if(axis === 0) {
            variance = me.Create(rowLength);
            for(var i = 0; i < rowLength; i++) {
                average = me.Average(a, 0);
                squareAverage = me.Average(squareA, 0);
                variance[i] = squareAverage[i] - (average[i] * average[i]);
            }
        } else {
            variance = me.Create(lineLength);
            for(var i = 0; i < lineLength; i++) {
                average = me.Average(a, 1);
                squareAverage = me.Average(squareA, 1);
                variance[i] = squareAverage[i] - (average[i] * average[i]);
            }
        }
        return variance;
    }
}

function StandardScaler() {
    var self = this;
    var model = null;

    self.Average = function(X, axis) {
        var me = this;
        var lineLength = X.length;
        var rowLength = X[0].length;
        var average = null;
        if(axis === -1) {
            var total = me.Total(X, -1);
            var n = lineLength * rowLength;
            average = total / n;
        } else if(axis === 0) {
            average = new Array(rowLength);
            var total = me.Total(X, 0);
            var n = rowLength;
            for(var i = 0; i < rowLength; i++) {
                average[i] = total[i] / n;
            }
        } else {
            average = new Array(lineLength);
            var total = me.Total(X, 1);
            var n = lineLength;
            for(var i = 0; i < lineLength; i++) {
                average[i] = total[i] / n;
            }
        }
        return average;
    }

    self.Deviation = function(X, axis) {
        var me = this;
        var variance = me.Variance(X, axis);
        var res = null;
        if(axis === -1) {
            res = Math.sqrt(variance);
        } else {
            res = new Array(variance.length);
            for(var i = 0; i < variance.length; i++) {
                res[i] = Math.sqrt(variance[i]);
            }
        }
        return res;
    }

    self.Fit = function(X) {
        model = X;
    }

    self.Transform = function(X, axis) {
        var me = this;
        var res = me.Deviation(X ,axis);
        return res;
    }

    self.Total = function(X, axis) {
        var lineLength = X.length;
        var rowLength = X[0].length;
        var res = null
        if(axis === -1) {
            var total = 0;
            for (var i = 0; i < lineLength; i++) {
                for(var j = 0; j < rowLength; j++) {
                    total += X[i][j];
                }
            }
            res = total
        } else if(axis === 0) {
            res = new Array(rowLength);
            for (var i = 0; i < rowLength; i++) {
                var sum = 0;
                for(var j = 0; j < lineLength; j++) {
                    sum += X[j][i];
                }
                res[i] = sum;
            }
        } else {
            res = new Array(lineLength);
            for (var i = 0; i < lineLength; i++) {
                var sum = 0;
                for(var j = 0; j < rowLength; j++) {
                    sum += X[i][j];
                }
                res[i] = sum;
            }
        }
        return res;
    }

    self.Variance = function(a, axis) {
        var me = this;
        var lineLength = X.length;
        var rowLength = X[0].length;
        var average = null;
        var variance = null;
        if(axis === -1) {
            average = me.Average(model, -1);
            var sum = 0;
            for(var i = 0; i < lineLength; i++) {
                average = me.Average(model, -1);
                for(var i = 0; i < row; i++) {
                    sum += (X[i][j] - average) * (X[i][j]- average);
                }
            }
            var n = rowLength * lineLength;
            variance = sum / n;
        } else if(axis === 0) {
            variance = me.Create(rowLength);
            for(var i = 0; i < rowLength; i++) {
                average = me.Average(model, 0);
                var sum = 0;
                for(var j = 0; j < lineLength; j++) {
                    sum += (X[j][i] - average[i]) * (X[j][i]- average[i]);
                }
                variance[i] = sum / lineLength;
            }
        } else {
            variance = me.Create(lineLength);
            for(var i = 0; i < lineLength; i++) {
                average = me.Average(model, 1);
                var sum = 0;
                for(var j = 0; j < rowLength; j++) {
                    sum += (X[i][j] - average[i]) * (X[i][j]- average[i]);
                }
                variance[i] = sum / rowLength;
            }
        }
        return variance;
    }
}

module.exports = Number2D;