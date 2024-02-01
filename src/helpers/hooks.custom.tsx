export function onConsoleLog(message?: any, ...optionalParams: any[]): void {
	return console.log(message, optionalParams);
}

export function onConsoleError(message?: any, ...optionalParams: any[]): void {
	return console.error(message, optionalParams);
}

export function onConsoleWarn(message?: any, ...optionalParams: any[]): void {
	return console.warn(message, optionalParams);
}

export function onConsoleClear(): void {
	return console.clear();
}

export function onConsoleTable(tabularData?: any, properties?: string[] | undefined) {
	return console.table(tabularData, properties);
}
