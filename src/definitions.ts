export interface AppleLoginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
