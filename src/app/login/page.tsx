import InputForm  from '../../components/atoms/InputForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-300 to-sky-400 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-center text-4xl font-bold text-sky-500">
          ログイン
        </h1>
        <form className="mt-8 space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              メールアドレス
            </label>
            <InputForm
              type="email"
              required
              autoComplete="email"
              placeholder="メールアドレス"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
              パスワード
            </label>
            <InputForm
              name="password"
              required
              autoComplete="current-password"
              placeholder="パスワード"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-full bg-teal-500 px-6 py-4 text-white font-semibold shadow-lg
                        transition hover:bg-teal-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              ログイン
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
