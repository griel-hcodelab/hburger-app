export function formatCurrency(
  initialValue: number,
  options?: {
    currency?: string;
    precision?: number;
    locale?: string;
  }
): string {
  const currencies = {
    USD: "$",
    EUR: "€",
    BRL: "R$",
  };
  const { currency, precision, locale } = Object.assign(
    {
      currency: "BRL",
      precision: 2,
      locale: "pt-BR",
    },
    options
  );

  const str = String(initialValue);

  const splited = str.split(".");
  const cents =
    splited.length > 1
      ? String(splited[1]).padEnd(precision, "0")
      : "0".repeat(precision);
  const value = splited[0];

  var chunks: string[] = [];

  for (let i = value.length; i > 0; i -= 3) {
    chunks.push(value.substring(i, i - 3));
  }

  chunks.reverse();

  switch (locale) {
    case "pt-BR":
      return `${currencies[currency]} ${chunks.join(".")}${
        precision > 0 ? "," + cents : ""
      }`;
    default:
      return `${currencies[currency]} ${chunks.join(",")}${
        precision > 0 ? "." + cents : ""
      }`;
  }
}
