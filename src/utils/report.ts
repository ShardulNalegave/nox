import writeXlsxFile from "write-excel-file";

const schema = [
  {
    column: 'Enter',
    type: Date,
    format: 'dd/mm/yyyy',
    value: (record: any) => new Date(record.enter),
  },
  {
    column: 'Exit',
    type: Date,
    format: 'dd/mm/yyyy',
    value: (record: any) => new Date(record.exit),
  },
  {
    column: 'Name',
    type: String,
    value: (record: any) => record.name,
  },
  {
    column: 'Email',
    type: String,
    value: (record: any) => record.email,
  },
  {
    column: 'Kind',
    type: String,
    value: (record: any) => record.kind,
  },
];

export async function prepareExcelReport(records: {
  enter: number,
  exit: number,
  id: string,
  name: string,
  email: string,
  kind: string,
}[]) {
  await writeXlsxFile(records, {
    schema,
    fileName: 'nox-report.xlsx',
  });
}