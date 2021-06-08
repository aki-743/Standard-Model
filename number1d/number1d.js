function Number1D() {
    var self = this;

    self.Addition = function(a, b) {
        var me = this
        var newB = new Array()
        var res = me.Create(a.length)
        if(typeof(b) !== "object") {
            for (let i = 0; i < a.length; i++) {
                newB[i] = b
            }
        } else if (typeof(b) === "object" && a.length === b.length) {
            newB = b
        } else {`
            return null`
        }
        for (let i = 0; i < a.length; i++) {
            res[i] = a[i] + newB[i]
        }
        return res
    }

    self.Arange = function(a, b, step) {
        var res = new Array()
        var index = new Number()
        var min = new Number()
        var max = new Number()
        if (a < b) {
            min = a
            max = b
            for (var i = min; i < max; i = i + step) {
                res[index] = i
                index++
            }
        } else {
            min = b
            max = a
            for (var i = max; i > min; i = i + step) {
                res[index] = i
                index++
            }
        }
        return res
    }

    self.ArgMax = function(X) {
        var me = this
        var sort = me.Sort(X)
        var max = sort[X.length - 1]
        return X.findIndex((val) => val === max)
    }

    self.ArgMin = function(X) {
        var me = this
        var sort = me.Sort(X)
        var min = sort[0]
        return X.findIndex((val) => val === min)
    }

    self.ArgSort = function(X) {
        var ObjectX = {}
        for(var i = 0; i < X.length; i++) {
            ObjectX[i] = X[i]
        }
        var numbers = Object.entries(ObjectX)
        numbers.sort(function(p1, p2) {
            var p1Val = p1[1]
            var p2Val = p2[1]
            return p1Val - p2Val
        })
        var res = numbers.map((num) => {
            return Number(num[0])
        })
        return res
    }

    self.Average = function(X) {
        var me = this
        var total = me.Total(X)
        var res = total / X.length
        return res
    }
    
    self.Create = function(n) {
        var res = new Array(n);
        return res;
    }

    self.Deviation = function(X) {
        var me = this
        var variance = me.Variance(X)
        var res = Math.sqrt(variance)
        return res
    }

    self.Division = function(a, b) {
        var me = this
        var newB = new Array()
        var res = me.Create(a.length)
        if(typeof(b) !== "object") {
            for (let i = 0; i < a.length; i++) {
                newB[i] = b                
            }
        } else if (typeof(b) === "object" && a.length === b.length) {
            newB = b
        } else {
            return null
        }
        for (let i = 0; i < a.length; i++) {
            res[i] = a[i] / newB[i]
        }
        return res
    }
    
    self.Full = function(n, N) {
        var me = this;
        var res = me.Create(n);
        for(var i = 0; i < n; i++) {
            res[i] = N;
        }
        return res;
    }

    self.Indexing = function(X, indexes) {
        var me = this
        var length = indexes.length
        var res = me.Create(length)
        for (var i = 0; i < length; i++) {
            var index = indexes[i]
            res[i] = X[index]
        }
        return res
    }

    self.Multiplication = function(a, b) {
        var me =this
        var newB = new Array()
        var res = me.Create(a.length)
        if(typeof(b) !== "object") {
            for (let i = 0; i < a.length; i++) {
                newB[i] = b                
            }
        } else if (typeof(b) === "object" && a.length === b.length) {
            newB = b
        } else {
            return null
        }
        for (let i = 0; i < a.length; i++) {
            res[i] = a[i] * newB[i]
        }
        return res
    }

    self.RandomFloat = function(n, low, high) {
        var me = this
        var res = me.Create(n)
        for (var i = 0; i < n; i++) {
            res[i] = Math.random() * (high - low) + low
        }
        return res
    }

    self.RandomInt = function(n, low, high) {
        var randoms = new Array()
        var res = new Array()
        for (var i = 0; i < 1000000 ; i++) {
            var tmp = Math.floor(Math.random() * (high - low) + low)
            if (!randoms.includes(tmp)) {
                res.push(tmp)
                randoms.push(tmp)
            }
            if(randoms.length === n) {
                break;
            }
        }
        return res
    }
    

    self.Sort = function(X) {
        var me = this
        var argSort = me.ArgSort(X)
        return me.Indexing(X, argSort)
    }

    self.Shuffle = function(X) {
        var me = this
        var length = X.length
        var tmps = me.RandomInt(length, 0, length)  
        var res = me.Create(length)
        for (let i = 0; i < length; i++) {
            res[i] = X[tmps[i]]
        }  
        return res       
    }

    self.Substract = function(a, b) {
        var me = this
        var newB = new Array()
        var res = me.Create(a.length)
        if(typeof(b) !== "object") {
            for (let i = 0; i < a.length; i++) {
                newB[i] = b                
            }
        } else if (typeof(b) === "object" && a.length === b.length) {
            newB = b
        } else {
            return null
        }
        for (let i = 0; i < a.length; i++) {
            res[i] = a[i] - newB[i]
        }
        return res
    }

    self.Total = function(X) {
        var res = X.reduce(function(prevValue, currentValue) {
            return prevValue + currentValue
        }, 0)
        return res
    }

    self.Variance = function(X) {
        var me = this
        var average = me.Average(X)
        var squareX = X.map((val) => val * val)
        var squareAverage = me.Average(squareX)
        var res = squareAverage - average
        return res
    }
}

module.exports = Number1D