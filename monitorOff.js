const { exec } = require('child_process');

function desativarMonitor() {
    const command = 'DisplaySwitch.exe /internal'; // Comando para desligar o segundo monitor

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return;
        }
        console.log('Segundo monitor desligado!');
    });
}

desativarMonitor();
