"use client";
export function RegisterUser() {
  return (
    <>
      <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:pr-12">
        Registro Usuario
      </h2>

      <div className="flex items-center justify-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>

        <h3 className="mb-5 mt-5 text-base font-bold text-gray-900 sm:pr-12">
          Información Basica
        </h3>
      </div>

      <div className="relative mt-1 flex h-full w-full flex-col rounded-md bg-slate-200 p-10 shadow-sm md:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-auto md:pr-5">
          <label
            className="dark:hover:bg-bray-800 flex w-auto cursor-pointer flex-col items-center justify-center rounded-lg 
         border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100
         dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-32 w-32 flex-none rounded-lg bg-gray-800 object-cover"
                typeof="file"
              />
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
          <button
            type="button"
            className="mt-2 w-auto rounded-md bg-cyan-400 px-7 py-1 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 md:px-4"
          >
            Subir foto
          </button>
        </div>

        <div className="flex w-full flex-col md:w-full ">
          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 pt-5 md:w-1/2 md:px-5 md:pt-0">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Jane Smith"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Jane Smith"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5 md:pb-0">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="ejemplo@gmail.com"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5 md:pb-0">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="relative mt-2">
                <input
                  type="password"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="***********"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-2 mb-5 sm:mb-0 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <h3 className="text-base font-bold text-gray-900 sm:pr-12">
          Información Personal
        </h3>
      </div>

      <div className="relative mt-1 flex h-full w-full flex-col rounded-md p-2 md:flex-row">
        <div className="flex w-full flex-col md:w-full ">
          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 pt-0 md:w-1/2  md:px-5 md:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Número de Celular
              </label>
              <div className="relative mt-2">
                <input
                  type="phone"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="(+51) 999 999 999"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="w-full flex-col pb-5 pt-0 md:w-1/2 md:px-5 md:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fecha de Nacimiento
              </label>
              <div className="relative mt-2">
                <input
                  type="date"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder=""
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tipo de Documento de Identidad
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                N° de Documento de Identidad
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="# documento"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                País
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Departamento
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provincia
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Distrito
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:px-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección
              </label>
              <div className="relative mt-2">
                <input
                  type="email"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Av. Los Pinos 123 - San Isidro"
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-2 mb-5 sm:mb-0  mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>

        <h3 className="text-base font-bold text-gray-900 sm:pr-12">
          Educación
        </h3>
      </div>

      <div className="relative mt-1 flex h-full w-full flex-col rounded-md p-2 md:flex-row">
        <div className="flex w-full flex-col md:w-full ">
          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 pt-0 md:w-1/2  md:px-5 md:pt-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Último Grado de Estudios
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 pt-0 md:w-1/2 md:px-5 md:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre de la Institución
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer block w-full border-0 bg-transparent py-1.5 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder=""
                />
                <div
                  className=" inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Carrera / Especialidad
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ciclo / Semestre
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-2 mb-5  sm:mb-0 mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>

        <h3 className="text-base font-bold text-gray-900 sm:pr-12">
          Asociación KP
        </h3>
      </div>

      <div className="relative mt-1 flex h-full w-full flex-col rounded-md p-5 md:flex-row">
        <div className="flex w-full flex-col md:w-full ">
          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Team KP
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Lider
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rol
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="w-full flex-col pb-5 md:w-1/2 md:px-5">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Programa
              </label>
              <select
                id="location"
                name="location"
                className="peer 
              
               mt-2.5 block w-full border-b border-gray-300  

              bg-transparent py-1.5 text-gray-400  outline-none focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6
              "
                // defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="flex w-auto flex-col md:w-full md:flex-row">
            <div className="w-full flex-col pb-5 md:px-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Observación
              </label>
              <div className="relative mt-2">
                <textarea placeholder="Escriba un comentario ...." className="peer block  h-40 w-full resize-none border-b border-gray-300 bg-transparent p-1 focus:border-indigo-600   focus:outline-none  focus:ring-0  peer-focus:border-b-2 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-end  md:flex-row">
        <button
          type="submit"
          className="mr-5 mt-5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Guardar
        </button>
        <button
          type="submit"
          className="mr-5 mt-5 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Cancelar
        </button>
      </div>
    </>
  );
}
