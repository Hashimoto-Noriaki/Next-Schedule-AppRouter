import LoginButton from '../components/atoms/LoginButton'

const meta = {
  id: 'atoms-loginbutton',
  title: 'Atoms/LoginButton',
  component: LoginButton,
  args: { href: '/login', children: 'ログインはこちら' },
} satisfies Meta<typeof LoginButton>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
