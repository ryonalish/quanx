
	[Script]
	https://weather-data.apple.com/v1/weather/[\w-]+/[0-9]+\.[0-9]+/[0-9]+\.[0-9]+\?include= url script-response-body https://github.com/ryonalish/surge/raw/main/aqi-us.js

	[MITM]
	hostname = weather-data.apple.com
