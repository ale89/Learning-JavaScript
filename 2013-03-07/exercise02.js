function fibonacci(i) {
	if (!(n in fibonacci)) {
		fibonacci[i]=fibonacci(i-1)+fibonacci(i-2);
	}
	return fibonacci[i];
}
