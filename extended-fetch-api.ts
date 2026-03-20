const response = await fetch(url, {
  next: { revalidate: 60, tags: ['some-cache-tag'] },
});

// After data mutation
revalidateTag("some-cache-tag")