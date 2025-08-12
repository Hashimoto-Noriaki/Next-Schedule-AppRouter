
import { NotLoginLayout }  from '../../components/templates/NotLoginLayout'
import LoginButton  from '../../components/atoms/LoginButton'


export function TopPage(){
    return(
        <NotLoginLayout>
            <div className="text-center">
                <h1 className="logo text-7xl">スケジュール管理</h1>
                <p className="pt-[30px] font-bold text-3xl">このアプリは、スケジュールを管理するためのアプリです。</p>
                <p className="pt-[30px] font-bold text-3xl">ユーザーは、スケジュールを登録、編集、削除することができます。</p>
                <p className="pt-[30px] font-bold text-3xl">また、スケジュールをカレンダー形式で表示することができます。</p>
            </div>
            <div className="pt-[20vh]">
                <LoginButton href="/">
                    ログイン
                </LoginButton>
            </div>
        </NotLoginLayout>
    )
}
