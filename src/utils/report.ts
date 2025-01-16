import writeXlsxFile from "write-excel-file";

const schema = [
  {
    column: 'Enter',
    type: String,
    value: (record: any) => new Date(record.enter).toLocaleString(),
  },
  {
    column: 'Exit',
    type: String,
    value: (record: any) => new Date(record.exit).toLocaleString(),
  },
  {
    column: 'Name',
    type: String,
    value: (record: any) => record.name,
  },
  {
    column: 'Kind',
    type: String,
    value: (record: any) => record.kind,
  },
  {
    column: 'Roll No',
    type: String,
    value: (record: any) => record.roll_no,
  },
  {
    column: 'ID',
    type: String,
    value: (record: any) => record.id,
  }
];

export async function prepareExcelReport(records: {
  enter: number,
  exit: number,
  id: string,
  name: string,
  kind: string,
  roll_no: string,
}[]) {
  await writeXlsxFile(records, {
    schema,
    fileName: 'nox-report.xlsx',
  });
}