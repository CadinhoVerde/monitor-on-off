const { exec } = require('child_process');

function ativarMonitor() {
    const command = 'DisplaySwitch.exe /extend'; // Comando para ativar o segundo monitor

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return;
        }
        console.log('Segundo monitor ligado!');
    });
}

ativarMonitor();
