
type ClassValue =
  | string
  | number
  | { [key: string]: any }
  | ClassValue[]
  | undefined
  | null
  | boolean;

export default function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  const processArg = (arg: ClassValue) => {
    if (!arg) {
      return;
    }

    const typeOfArg = typeof arg;
    if (typeOfArg === 'string' || typeOfArg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      arg.forEach(processArg);
    } else if (typeOfArg === 'object') {
      // ✅ Solución C: Usar Object.keys()
      Object.keys(arg).forEach(key => {
        // TypeScript sigue sin saber el tipo de 'arg[key]'
        // por lo que necesitamos un cast simple
        if ((arg as any)[key]) {
          classes.push(key);
        }
      });
    }
  };

  args.forEach(processArg);
  return classes.join(' ').trim();
}
