{{- define "streamingapp.mongoUri" -}}
mongodb://mongo:27017/{{ .Values.global.mongoDb }}
{{- end -}}
