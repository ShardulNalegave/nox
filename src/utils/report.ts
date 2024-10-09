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
];

export async function prepareExcelReport(records: {
  enter: number,
  exit: number,
  id: string,
  name: string,
  kind: string,
}[]) {
  await writeXlsxFile(records, {
    schema,
    fileName: 'nox-report.xlsx',
  });
}