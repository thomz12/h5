    H5.define("System.Collections.Generic.LinkedList$1.Enumerator", function (T) { return {
        inherits: [System.Collections.Generic.IEnumerator$1(T),System.Collections.IEnumerator],
        $kind: "nested struct",
        statics: {
            fields: {
                LinkedListName: null,
                CurrentValueName: null,
                VersionName: null,
                IndexName: null
            },
            ctors: {
                init: function () {
                    this.LinkedListName = "LinkedList";
                    this.CurrentValueName = "Current";
                    this.VersionName = "Version";
                    this.IndexName = "Index";
                }
            },
            methods: {
                getDefaultValue: function () { return new (System.Collections.Generic.LinkedList$1.Enumerator(T))(); }
            }
        },
        fields: {
            list: null,
            node: null,
            version: 0,
            current: H5.getDefaultValue(T),
            index: 0
        },
        props: {
            Current: {
                get: function () {
                    return this.current;
                }
            },
            System$Collections$IEnumerator$Current: {
                get: function () {
                    if (this.index === 0 || (this.index === ((this.list.Count + 1) | 0))) {
                        System.ThrowHelper.ThrowInvalidOperationException(System.ExceptionResource.InvalidOperation_EnumOpCantHappen);
                    }

                    return this.current;
                }
            }
        },
        alias: [
            "Current", ["System$Collections$Generic$IEnumerator$1$" + H5.getTypeAlias(T) + "$Current$1", "System$Collections$Generic$IEnumerator$1$Current$1"],
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "Dispose", "System$IDisposable$Dispose"
        ],
        ctors: {
            $ctor1: function (list) {
                this.$initialize();
                this.list = list;
                this.version = list.version;
                this.node = list.head;
                this.current = H5.getDefaultValue(T);
                this.index = 0;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            moveNext: function () {
                if (this.version !== this.list.version) {
                    throw new System.InvalidOperationException.ctor();
                }

                if (this.node == null) {
                    this.index = (this.list.Count + 1) | 0;
                    return false;
                }

                this.index = (this.index + 1) | 0;
                this.current = this.node.item;
                this.node = this.node.next;
                if (H5.referenceEquals(this.node, this.list.head)) {
                    this.node = null;
                }
                return true;
            },
            System$Collections$IEnumerator$reset: function () {
                if (this.version !== this.list.version) {
                    throw new System.InvalidOperationException.ctor();
                }

                this.current = H5.getDefaultValue(T);
                this.node = this.list.head;
                this.index = 0;
            },
            Dispose: function () { },
            getHashCode: function () {
                var h = H5.addHash([3788985113, this.list, this.node, this.version, this.current, this.index]);
                return h;
            },
            equals: function (o) {
                if (!H5.is(o, System.Collections.Generic.LinkedList$1.Enumerator(T))) {
                    return false;
                }
                return H5.equals(this.list, o.list) && H5.equals(this.node, o.node) && H5.equals(this.version, o.version) && H5.equals(this.current, o.current) && H5.equals(this.index, o.index);
            },
            $clone: function (to) {
                var s = to || new (System.Collections.Generic.LinkedList$1.Enumerator(T))();
                s.list = this.list;
                s.node = this.node;
                s.version = this.version;
                s.current = this.current;
                s.index = this.index;
                return s;
            }
        }
    }; });
