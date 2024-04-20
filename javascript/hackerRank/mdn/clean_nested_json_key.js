const { iteratee } = require("lodash")

const data = {
    "action": "created",
    "repository": {
        "id": 12,
        "node_id": "12",
        "name": "meu-super-repo",
        "full_name": "organizationname/meu-super-repo",
        "private": true,
        "owner": {
            "login": "organizationname",
            "id": 34,
            "node_id": "34",
            "avatar_url": "https://avatars.githubusercontent.com/u/56453084?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/organizationname",
            "html_url": "https://github.com/organizationname",
            "followers_url": "https://api.github.com/users/organizationname/followers",
            "following_url": "https://api.github.com/users/organizationname/following{/other_user}",
            "gists_url": "https://api.github.com/users/organizationname/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/organizationname/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/organizationname/subscriptions",
            "organizations_url": "https://api.github.com/users/organizationname/orgs",
            "repos_url": "https://api.github.com/users/organizationname/repos",
            "events_url": "https://api.github.com/users/organizationname/events{/privacy}",
            "received_events_url": "https://api.github.com/users/organizationname/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "html_url": "https://github.com/organizationname/meu-super-repo",
        "description": "Template for creating standalone techdocs documentation",
        "fork": false,
        "url": "https://api.github.com/repos/organizationname/meu-super-repo",
        "forks_url": "https://api.github.com/repos/organizationname/meu-super-repo/forks",
        "keys_url": "https://api.github.com/repos/organizationname/meu-super-repo/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/organizationname/meu-super-repo/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/organizationname/meu-super-repo/teams",
        "hooks_url": "https://api.github.com/repos/organizationname/meu-super-repo/hooks",
        "issue_events_url": "https://api.github.com/repos/organizationname/meu-super-repo/issues/events{/number}",
        "events_url": "https://api.github.com/repos/organizationname/meu-super-repo/events",
        "assignees_url": "https://api.github.com/repos/organizationname/meu-super-repo/assignees{/user}",
        "branches_url": "https://api.github.com/repos/organizationname/meu-super-repo/branches{/branch}",
        "tags_url": "https://api.github.com/repos/organizationname/meu-super-repo/tags",
        "blobs_url": "https://api.github.com/repos/organizationname/meu-super-repo/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/organizationname/meu-super-repo/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/organizationname/meu-super-repo/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/organizationname/meu-super-repo/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/organizationname/meu-super-repo/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/organizationname/meu-super-repo/languages",
        "stargazers_url": "https://api.github.com/repos/organizationname/meu-super-repo/stargazers",
        "contributors_url": "https://api.github.com/repos/organizationname/meu-super-repo/contributors",
        "subscribers_url": "https://api.github.com/repos/organizationname/meu-super-repo/subscribers",
        "subscription_url": "https://api.github.com/repos/organizationname/meu-super-repo/subscription",
        "commits_url": "https://api.github.com/repos/organizationname/meu-super-repo/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/organizationname/meu-super-repo/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/organizationname/meu-super-repo/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/organizationname/meu-super-repo/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/organizationname/meu-super-repo/contents/{+path}",
        "compare_url": "https://api.github.com/repos/organizationname/meu-super-repo/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/organizationname/meu-super-repo/merges",
        "archive_url": "https://api.github.com/repos/organizationname/meu-super-repo/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/organizationname/meu-super-repo/downloads",
        "issues_url": "https://api.github.com/repos/organizationname/meu-super-repo/issues{/number}",
        "pulls_url": "https://api.github.com/repos/organizationname/meu-super-repo/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/organizationname/meu-super-repo/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/organizationname/meu-super-repo/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/organizationname/meu-super-repo/labels{/name}",
        "releases_url": "https://api.github.com/repos/organizationname/meu-super-repo/releases{/id}",
        "deployments_url": "https://api.github.com/repos/organizationname/meu-super-repo/deployments",
        "created_at": "2023-11-14T19:14:16Z",
        "updated_at": "2023-11-14T19:14:16Z",
        "pushed_at": "2023-11-14T19:14:16Z",
        "git_url": "git://github.com/organizationname/meu-super-repo.git",
        "ssh_url": "git@github.com:organizationname/meu-super-repo.git",
        "clone_url": "https://github.com/organizationname/meu-super-repo.git",
        "svn_url": "https://github.com/organizationname/meu-super-repo",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "private",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main",
        "custom_properties": {

        }
    },
    "organization": {
        "login": "organizationname",
        "id": 66,
        "node_id": "66",
        "url": "https://api.github.com/orgs/organizationname",
        "repos_url": "https://api.github.com/orgs/organizationname/repos",
        "events_url": "https://api.github.com/orgs/organizationname/events",
        "hooks_url": "https://api.github.com/orgs/organizationname/hooks",
        "issues_url": "https://api.github.com/orgs/organizationname/issues",
        "members_url": "https://api.github.com/orgs/organizationname/members{/member}",
        "public_members_url": "https://api.github.com/orgs/organizationname/public_members{/member}",
        "avatar_url": "https://avatars.githubusercontent.com/u/56453084?v=4",
        "description": ""
    },
    "enterprise": {
        "id": 77,
        "slug": "my-org",
        "name": "My Org Enterprise",
        "node_id": "77",
        "avatar_url": "https://avatars.githubusercontent.com/b/55?v=4",
        "description": "",
        "website_url": "",
        "html_url": "https://github.com/enterprises/my-org",
        "created_at": "2019-12-19T01:59:27Z",
        "updated_at": "2023-11-14T00:33:57Z"
    },
    "sender": {
        "login": "x[bot]",
        "id": 98,
        "node_id": "98=",
        "avatar_url": "https://avatars.githubusercontent.com/in/98?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/x-bot%5Bbot%5D",
        "html_url": "https://github.com/apps/x-bot",
        "followers_url": "https://api.github.com/users/x-bot%5Bbot%5D/followers",
        "following_url": "https://api.github.com/users/x-bot%5Bbot%5D/following{/other_user}",
        "gists_url": "https://api.github.com/users/x-bot%5Bbot%5D/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/x-bot%5Bbot%5D/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/x-bot%5Bbot%5D/subscriptions",
        "organizations_url": "https://api.github.com/users/x-bot%5Bbot%5D/orgs",
        "repos_url": "https://api.github.com/users/x-bot%5Bbot%5D/repos",
        "events_url": "https://api.github.com/users/x-bot%5Bbot%5D/events{/privacy}",
        "received_events_url": "https://api.github.com/users/x-bot%5Bbot%5D/received_events",
        "type": "Bot",
        "site_admin": false
    }
}

function clean(object) {
    Object
        .entries(object)
        .forEach(([k, v]) => {
            if (v && typeof v === 'object') {
                clean(v);
            }
            if (v && typeof v === 'object' && !Object.keys(v).length || k.includes("_url")) {
                if (Array.isArray(object)) {
                    object.splice(k, 1);
                } else {
                    delete object[k];
                }
            }
        });
    return object;
}

console.log(clean(data))