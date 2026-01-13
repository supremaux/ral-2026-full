; Arquivo executável para atualizar as dependências do projeto Node.js. 

@echo off
break on

cd D:\Clientes\Minaset\Ral\ral-vite-react-v3\back
npm outdated
npm update
npm install
npm audit fix

echo Atualização concluída!
pause >nul