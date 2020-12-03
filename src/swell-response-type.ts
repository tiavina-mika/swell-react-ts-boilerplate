interface OptionValue {
  id:string;
  name: string;
}
interface Option {
  id: string;
  name: string;
  values: OptionValue[];
  variant: true
  input_type: string;
  required: boolean;
  active: boolean;
  attribute_id: string;
}
interface File {
  // id: "5f5feac67c415253b1861a85"
height: number;
md5: string;
url: string; 
width: number;
}
interface Image {
  id: string;
  file: File;
}
interface SwellResult {
  id: string;
  currency: "EUR" | "USD"
  description: string;
  images: Image[];
  name: string
  options: Option[];
  price: number;
  slug: string;
  stock_status?: any
  attributes: any
}
export interface SwellResponse {
  count: number;
  page: number;
  results: SwellResult[];
}