"use client"

import InputForm  from '../../components/atoms/InputForm'
import AuthButton from '../../components/atoms/AuthButton'

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
            <form>
              <AuthButton>ログイン</AuthButton>
            </form>
          </div>
        </form>
      </div>
    </div>
  )
}
