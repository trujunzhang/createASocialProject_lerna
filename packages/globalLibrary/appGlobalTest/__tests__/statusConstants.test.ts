import { StatusConstants } from '@app/types'

describe('Function of the StatusConstants ', () => {
  it('should return correctly', () => {
    const posts = StatusConstants.POSTS
    expect(posts.STATUS_POSTS_DELETED).toBe(5)
    expect(posts.STATUS_POSTS_PENDING).toBe(1)
  })
})

describe('methods correctly in the sendEmails', () => {
  test('should return string correctly invoked secret', () => {
    const secretString = StatusConstants.secret(32)

    const expectedSecretLength = 32

    expect(secretString).toBeDefined()
    expect(expectedSecretLength).toEqual(secretString.length)
  })
})
