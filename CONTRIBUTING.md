# Contributing

`gopassbridge` uses GitHub to manage reviews of pull requests.

* If you have a trivial fix or improvement, go ahead and create a pull request.

* If you plan to do something more involved, first raise an issue to discuss
  your idea. This will avoid unnecessary work.

The gopassbridge code must be fully reviewable also when installed as extension. 
Therefore, no 3rd party libraries and plain JavaScript must be used. Also keep your code as simple as possible. 

Modern JavaScript features can be used if they are supported by current LTS version of Firefox and Chrome.

Also add a comment to your pull request if you want the maintainer to prepare a new release of the Chrome and Firefox plugins.

## Pull Request Checklist

* Branch from master and, if needed, rebase to the current master branch before submitting your pull request.
  If it doesn't merge cleanly with master you will be asked to rebase your changes.

* Commits should be as small as possible, while ensuring that each commit is correct independently.

* Add tests relevant to the fixed bug or new feature.

* Add a [DCO](https://developercertificate.org/) / `Signed-off-by` line in any commit message.

* Add a RELEASE_NOTES entry in every commit. Set it to n/a for minor changes that are not noteworthy for the changelog.
