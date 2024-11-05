{
  // Reference Type --> Object

  const user: {
    readonly company: string; // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Rozweb Solution",
    firstName: "Mosheur",
    lastName: "Rahman",
    isMarried: false
  };

//   user.company = "PH";
}
