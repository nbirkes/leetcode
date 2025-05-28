class MyHashSet {
    items: Set<number> = new Set();

    constructor() {
        
    }

    add(key: number): void {
        this.items.add(key);
    }

    remove(key: number): void {
        this.items.delete(key);
    }

    contains(key: number): boolean {
        return this.items.has(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
