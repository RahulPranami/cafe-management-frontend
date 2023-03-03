export class GlobalConstant {
  // message
  public static genericError: string =
    'Something went wrong. Please try again later.';

  public static unauthorized: string =
    'You are not authorized to access this page.';
  // Regex
  public static nameRegex: string = '[a-zA-Z0-9 ]*';
  // public static nameRegex: string = '^[a-zA-Z0-9 ]*$';
  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4]';
  // public static emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public static contactNumberRegex: string = '^[e0-9]{10,10}$';
  // public static contactNumberRegex: string = '^[e0-9]{10,10}*$';

  // variable
  public static error: string = 'error';
}
