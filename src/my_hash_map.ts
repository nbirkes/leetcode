class MyHashMap {
    items: Array<number | undefined> = [];

    constructor() {
        
    }

    put(key: number, value: number): void {
        this.items[key] = value;
    }

    get(key: number): number {
        return this.items[key] ?? -1;
    }

    remove(key: number): void {
        this.items[key] = undefined;
    }
}


//   Your MyHashMap object will be instantiated and called as such:
  var obj = new MyHashMap()
  obj.put(5,5)
  console.log(obj.items);
//   var param_2 = obj.get(key)
//   obj.remove(key)
 