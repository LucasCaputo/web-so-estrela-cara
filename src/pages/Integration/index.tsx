import React, { useState } from "react";
import { toast } from "react-toastify";

import LinkerPageHeader from "../../components/LinkerPageHeader";
import api from "../../services/api";
import renderMessageError from "../../utils/renderMessageError";

import "./styles.css";

function Integration() {
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit() {
    if (!file) {
      return;
    }

    const data = new FormData();

    data.append("file", file, file.name);

    const toastId = toast.info("Importando arquivo... Favor, aguarde", {
      autoClose: false,
    });

    try {
      await api.post("balances/files", data);
      toast.update(toastId, {
        render: "Arquivo importado com sucesso!",
        type: "success",
        autoClose: 2000,
      });
    } catch (error) {
      const message = renderMessageError(error);

      console.log(message);

      toast.update(toastId, {
        render: message,
        type: "error",
        autoClose: 2000,
      });
    }
  }

  return (
    <div id="Integration">
      <LinkerPageHeader
        name="Senhor Barriga"
        to="/home"
        type="return"
      ></LinkerPageHeader>

      <h1>Integração</h1>

      <label htmlFor="file">
        <h2>Clique aqui para poder enviar seu arquivo de lançamentos</h2>
      </label>
      <input
        type="file"
        id="file"
        onChange={(event) => {
          const file_input = event.target.files;

          if (file_input) {
            setFile(file_input.item(0));
          }
        }}
      />

      <button onClick={handleSubmit}>Enviar</button>

      <footer>
        <h2>Formato dos dados</h2>

        <table>
          <thead>
            <tr>
              <td>Nome/Descrição</td>
              <td>Valor</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conta de água</td>
              <td>-254.65</td>
              <td>01/11/2020</td>
            </tr>
            <tr>
              <td>Recebimento venda. Cod: 8758</td>
              <td> 2054.65</td>
              <td>02/11/2020</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
}

export default Integration;
