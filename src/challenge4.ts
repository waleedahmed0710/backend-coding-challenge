type RecordType = { [key: string]: any };

class DataProcessor {
    private records: RecordType[];
    
    constructor() {
        this.records = []
    }

    addRecord(record: RecordType): void{
        this.records.push(record);
    }

    getAllRecords(): RecordType[]{
        return [...this.records] //return shallow copy
    }

    filterRecordsBy(predicate: (record: RecordType)=> boolean): RecordType[]{
        return this.records.filter(predicate)
    }
}

// Test the implementation
const processor = new DataProcessor();
processor.addRecord({ name: "Alice", age: 30 });
processor.addRecord({ name: "Bob", age: 25 });

const allRecords = processor.getAllRecords();
console.log(allRecords);
// Expected: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]

// Filter for records with age > 26
const filtered = processor.filterRecordsBy(record => record.age > 26);
console.log(filtered);
// Expected: [{ name: "Alice", age: 30 }]