export default function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-sky-300 to-sky-400 h-screen flex items-center justify-center">
      <div className="w-[800px] p-15 bg-white rounded-lg shadow-lg flex flex-col items-center gap-6">
        <h1 className="font-bold text-4xl text-sky-400 text-center">ログイン</h1>
        <form className="w-full flex flex-col items-center gap-4">
            <div className="w-[100%]">
                <label className="font-bold text-gray-700">メールアドレス</label>
                <input
                    type="email"
                    className="border-4 border-sky-300 font-bold px-3 py-5 w-full rounded-md"
                    placeholder="メールアドレス"
                    />
            </div>
            <div className="w-[100%] mt-5">
                <label className="font-bold text-gray-700">パスワード</label>
                <input
                    type="password"
                    className="border-4 border-sky-300 px-3 py-5 w-full rounded-md"
                    placeholder="パスワード"
                />
            </div>
            <div className="w-[80%] mt-5">
            <button
                className="bg-emerald-600 px-12 py-5 rounded-full text-white w-full shadow-lg hover:bg-emerald-500 transition"
            >
                ログイン
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}
