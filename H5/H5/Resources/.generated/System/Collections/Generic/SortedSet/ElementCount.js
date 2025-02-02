    H5.define("System.Collections.Generic.SortedSet$1.ElementCount", function (T) { return {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.SortedSet$1.ElementCount(T))(); }
            }
        },
        fields: {
            uniqueCount: 0,
            unfoundCount: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = H5.addHash([4920463385, this.uniqueCount, this.unfoundCount]);
                return h;
            },
            equals: function (o) {
                if (!H5.is(o, System.Collections.Generic.SortedSet$1.ElementCount(T))) {
                    return false;
                }
                return H5.equals(this.uniqueCount, o.uniqueCount) && H5.equals(this.unfoundCount, o.unfoundCount);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.SortedSet$1.ElementCount(T))();
                s.uniqueCount = this.uniqueCount;
                s.unfoundCount = this.unfoundCount;
                return s;
            }
        }
    }; });
